import { useSelector } from 'react-redux'
import { pluralizeItem } from '../../helpers/Helper'
import styles from './TableTotalPrice.module.css'
import { RootState } from '../../store/store'

interface PropsTable {
  total: number
  discountedTotal: number
}
const TableTotalPrice: React.FC<PropsTable> = ({
  discountedTotal,
  total,
}) => {
  const cartUser = useSelector((state: RootState) => {
    if (state.cart.dataById) return state.cart.dataById
  })

  const filteredProducts = cartUser?.products.filter(
    (product) => product.quantity !== 0,
  )
const totalProductsCount = filteredProducts?.length
  return (
    <table role="table" aria-label="Total price">
      <tbody role="rowgroup">
        <tr role="row">
          <td role="cell" className={styles.count}>
            Total count
          </td>
          <td role="cell" className={styles.count}>
            {totalProductsCount} {pluralizeItem(totalProductsCount)}
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
