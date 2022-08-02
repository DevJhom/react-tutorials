import {useParams} from 'react-router-dom';

const ProductDetail = () => {
    const param = useParams();

    return <section>
        <h1>
            {param.productId}
        </h1>
    </section>
};

export default ProductDetail;