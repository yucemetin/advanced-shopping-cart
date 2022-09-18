import { Row, Col } from "react-bootstrap"
import StoreItem from "../components/StoreItem"
import Search from "../components/Search"
import { useFilter } from "../context/FilterContext"

export default function Store() {
    const { storeItems } = useFilter()
    return (
        <>
            <Search />
            <h1>Store</h1>
            <Row md={2} xs={1} lg={3} className="g-3">
                {storeItems.map((item: JSX.IntrinsicAttributes & { id: number; name: string; price: number; imgUrl: string }) => (
                    <Col key={item?.id}>
                        <StoreItem {...item} />
                    </Col>
                ))}
            </Row>
        </>
    )
}
