import { pluralizeItem } from '../../helpers/Helper'
import styles from './TableTotalPrice.module.css'

interface PropsTable {
  totalProducts: number
  total: number
  discountedTotal: number
}
const TableTotalPrice: React.FC<PropsTable> = ({
  totalProducts,
  discountedTotal,
  total,
}) => {
  return (
    <table role="table" aria-label="Total price">
      <tbody role="rowgroup">
        <tr role="row">
          <td role="cell" className={styles.count}>
            Total count
          </td>
          <td role="cell" className={styles.count}>
            {totalProducts} {pluralizeItem(totalProducts)}
          </td>
        </tr>
        <tr role="row">
          <td role="cell" className={styles.priceName}>
            Price without discount
          </td>
          <td role="cell" className={`${styles.priceName} ${styles.price}`}>
            {total}$
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
            {discountedTotal}$
          </td>
        </tr>
      </tfoot>
    </table>
  )
}

export default TableTotalPrice
