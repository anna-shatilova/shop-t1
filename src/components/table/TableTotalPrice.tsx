import styles from './TableTotalPrice.module.css'

function TableTotalPrice() {
  return (
    <table role="table" aria-label="Total price">
      <tbody role="rowgroup">
        <tr role="row">
          <td role="cell" className={styles.count}>
            Total count
          </td>
          <td role="cell" className={styles.count}>
            3 items
          </td>
        </tr>
        <tr role="row">
          <td role="cell" className={styles.priceName}>
            Price without discount
          </td>
          <td role="cell" className={`${styles.priceName} ${styles.price}`}>
            700$
          </td>
        </tr>
      </tbody>
      <tfoot role="rowgroup">
        <tr role="row">
          <td role="columnheader" className={styles.totalPriceName}>
            Total price
          </td>
          <td
            role="columnheader"
            className={`${styles.totalPriceName} ${styles.totalPrice}`}
          >
            590$
          </td>
        </tr>
      </tfoot>
    </table>
  )
}

export default TableTotalPrice
