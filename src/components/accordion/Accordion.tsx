import { useState } from 'react'
import styles from './Accordion.module.css'

interface AccordionItem {
  id: number
  question: string
  answer: string
}

const items = [
  {
    id: 1,
    question: 'How can I track the status of my order?',
    answer:
      'After placing your order, you will receive a confirmation email containing your order number and a tracking link. You can also log in to your account on our website and go to the "My Orders" section to track your delivery status.',
  },
  {
    id: 2,
    question: 'What payment methods do you accept?',
    answer:
      'After placing your order, you will receive a confirmation email containing your order number and a tracking link. You can also log in to your account on our website and go to the "My Orders" section to track your delivery status.',
  },
  {
    id: 3,
    question: 'How can I return or exchange an item?',
    answer:
      'After placing your order, you will receive a confirmation email containing your order number and a tracking link. You can also log in to your account on our website and go to the "My Orders" section to track your delivery status.',
  },
]

const Accordion = () => {
  const [activeItems, setActiveItems] = useState<AccordionItem[]>([])

  const handleToggle = (item: AccordionItem) => {
    if (activeItems.includes(item)) {
      setActiveItems(activeItems.filter((i) => i !== item))
    } else {
      setActiveItems([...activeItems, item])
    }
  }
  return (
    <section id="FQA" className={styles.containerAccordion}>
      <div className={styles.accordion}>
        <h2 className={styles.headingFqa}>FAQ</h2>
        {items.map((item, id) => (
          <div
            key={id}
            className={styles.item}
            onClick={() => handleToggle(item)}
          >
            <div className={styles.question}>
              <span>{item.question}</span>
              <button className={styles.toggle}>
                <svg
                  className={`${activeItems.includes(item) && styles.plusRotate}`}
                  width="25"
                  height="26"
                  viewBox="0 0 25 26"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M12.9509 12.387L25 12.387V13.637L12.9509 13.637L12.9509 25.5002H11.5731L11.5731 13.637H0L0 12.387H11.5731V0.500244H12.9509V12.387Z"
                    fill="white"
                  />
                </svg>
              </button>
            </div>
            {activeItems.includes(item) && (
              <div
                className={styles.answer}
                style={{
                  height: activeItems.includes(item) ? 'auto' : '0',
                }}
              >
                {item.answer}
              </div>
            )}
          </div>
        ))}
      </div>
    </section>
  )
}

export default Accordion
