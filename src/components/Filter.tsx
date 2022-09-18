import { Button, Offcanvas, Stack, Form, Col, Row } from "react-bootstrap";
import { useFilter } from "../context/FilterContext";

type FilterProps = {
    isOpen: boolean
}

export default function Filter({ isOpen }: FilterProps) {
    const { closeFilter, maxPrice, setMaxPrice } = useFilter()
    return (
        <Offcanvas show={isOpen} onHide={closeFilter}>
            <Offcanvas.Header closeButton>
                <Offcanvas.Title>Filter</Offcanvas.Title>
            </Offcanvas.Header>
            <Offcanvas.Body>
                <Stack>
                    <Form>
                        <Form.Group>
                            <Row>
                                <Form.Label>
                                    Max Price
                                </Form.Label>
                                <Col xs="9">
                                    <Form.Range
                                        value={maxPrice}
                                        onChange={e => setMaxPrice(e.target.value)}
                                        min={0}
                                        max={20000}
                                    />
                                </Col>
                                <Col xs="3">
                                    <Form.Control value={maxPrice} onChange={e => setMaxPrice(e.target.value)} />
                                </Col>
                            </Row>
                        </Form.Group>
                    </Form>
                </Stack>
            </Offcanvas.Body>
        </Offcanvas >
    )
}
