import { useState } from "react";
import { Button, Offcanvas, Stack, Form, Col, Row } from "react-bootstrap";
import { useFilter } from "../context/FilterContext";
import Items from "../data/items.json"


type FilterProps = {
    isOpen: boolean
}

export default function Filter({ isOpen }: FilterProps) {
    const { closeFilter, setMaxPrice, setStoreItems } = useFilter()
    const [value, setValue] = useState(0)

    const saveFilters = () => {
        closeFilter()
        setMaxPrice(value)
    }

    const clearFilters = () => {
        closeFilter()
        setMaxPrice(0)
        setValue(0)
        setStoreItems(Items)
    }

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
                                        value={value}
                                        onChange={e => setValue(Number(e.target.value))}
                                        min={0}
                                        max={20000}
                                    />
                                </Col>
                                <Col xs="3">
                                    <Form.Control value={value} onChange={e => setValue(Number(e.target.value))} />
                                </Col>
                            </Row>
                        </Form.Group>
                    </Form>
                    <Button className="mt-3" onClick={saveFilters} variant="success">Save</Button>
                    <Button onClick={clearFilters} className="m-3" variant="outline-danger" style={{ position: "absolute", bottom: 5, right: 5 }}>
                        <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" viewBox="0 0 16 16">
                            <path d="M5.5 5.5A.5.5 0 0 1 6 6v6a.5.5 0 0 1-1 0V6a.5.5 0 0 1 .5-.5zm2.5 0a.5.5 0 0 1 .5.5v6a.5.5 0 0 1-1 0V6a.5.5 0 0 1 .5-.5zm3 .5a.5.5 0 0 0-1 0v6a.5.5 0 0 0 1 0V6z" />
                            <path fillRule="evenodd" d="M14.5 3a1 1 0 0 1-1 1H13v9a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V4h-.5a1 1 0 0 1-1-1V2a1 1 0 0 1 1-1H6a1 1 0 0 1 1-1h2a1 1 0 0 1 1 1h3.5a1 1 0 0 1 1 1v1zM4.118 4 4 4.059V13a1 1 0 0 0 1 1h6a1 1 0 0 0 1-1V4.059L11.882 4H4.118zM2.5 3V2h11v1h-11z" />
                        </svg>
                    </Button>
                </Stack>
            </Offcanvas.Body>
        </Offcanvas >
    )
}
