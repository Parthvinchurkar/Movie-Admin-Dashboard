import { useState } from 'react'
import { DragDropContext, Droppable, Draggable } from '@hello-pangea/dnd'

const initialData = {
  upcoming: [{ id: '1', title: 'Interstellar' }],
  running: [{ id: '2', title: 'Oppenheimer' }],
  ended: [{ id: '3', title: 'Joker' }],
}

export default function KanbanBoard() {
  const [columns, setColumns] = useState(initialData)

  const onDragEnd = ({ source, destination }) => {
    if (!destination) return

    const sourceItems = [...columns[source.droppableId]]
    const destItems =
      source.droppableId === destination.droppableId
        ? sourceItems
        : [...columns[destination.droppableId]]

    const [moved] = sourceItems.splice(source.index, 1)
    destItems.splice(destination.index, 0, moved)

    setColumns({
      ...columns,
      [source.droppableId]: sourceItems,
      [destination.droppableId]: destItems,
    })
  }

  return (
    <DragDropContext onDragEnd={onDragEnd}>
      <div className="grid md:grid-cols-3 gap-6">
        {Object.entries(columns).map(([key, items]) => (
          <Droppable droppableId={key} key={key}>
            {(p) => (
              <div
                ref={p.innerRef}
                {...p.droppableProps}
                className="bg-slate-800 p-4 rounded-xl"
              >
                <h2 className="mb-4 capitalize">{key}</h2>

                {items.map((item, index) => (
                  <Draggable
                    key={item.id}
                    draggableId={item.id}
                    index={index}
                  >
                    {(p) => (
                      <div
                        ref={p.innerRef}
                        {...p.draggableProps}
                        {...p.dragHandleProps}
                        className="bg-slate-700 p-2 mb-2 rounded"
                      >
                        🎬 {item.title}
                      </div>
                    )}
                  </Draggable>
                ))}

                {p.placeholder}
              </div>
            )}
          </Droppable>
        ))}
      </div>
    </DragDropContext>
  )
}
