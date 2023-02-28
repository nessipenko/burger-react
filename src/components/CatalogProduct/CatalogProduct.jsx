import { useDispatch } from 'react-redux'
import { API_URI } from '../../cons'
import { addProduct } from '../../store/order/orderSlice'
import style from './CatalogProduct.module.css'

export const CatalogProduct = ({ item }) => {
    const distpatch = useDispatch();
    return (
        <article className={style.product}>
            <img
                src={`${API_URI}/${item.image}`}
                alt={item.title}
                className="image"
            />

            <p className={style.price}>
                {item.price}<span className="currency">&nbsp;₽</span>
            </p>

            <h3 className={style.title}>
                <button className="detail">{item.title}</button>
            </h3>

            <p className={style.weight}>{item.weight}г</p>

            <button
                className={style.add}
                onClick={() => {
                    distpatch(addProduct({ id: item.id }))
                }}>

                Добавить
            </button>
        </article>

    )
}
