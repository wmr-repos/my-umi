import React, { ReactNode } from 'react'

interface Item {
  id: number
  content: ReactNode
}

interface RowListProps {
  items: Array<Item>
  renderItem: (item: Item) => ReactNode
}

const RowList: React.FC<RowListProps> = (props) => {
  const { items, renderItem } = props

  return (
    <div className="row_list">
      {items.map((item) => {
        return renderItem(item)
      })}
    </div>
  )
}

const Index = () => {
  return (
    <RowList
      items={[
        {
          id: 1,
          content: <div>111</div>,
        },
        {
          id: 2,
          content: <div>222</div>,
        },
        {
          id: 3,
          content: <div>333</div>,
        },
      ]}
      renderItem={(item) => {
        return (
          <div className="row_item" key={item.id}>
            {item.content}
          </div>
        )
      }}
    ></RowList>
  )
}

export default Index
