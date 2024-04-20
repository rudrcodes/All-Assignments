import { useEffect, useState } from 'react';
import Pagination from 'react-bootstrap/Pagination';



export const MyPagination = ({ current = 12, totalPages, }) => {
    const [activePage, setActivePage] = useState(1)
    let items = [];
    const makeActive = (num) => {
        setActivePage(num);
        console.log(num)
    }
    for (let number = 1; number <= 5; number++) {
        items.push(
            <Pagination.Item key={number} active={activePage == number} >
                <div onClick={() => makeActive(number)}>
                    {activePage == number && <div style={{ color: "red" }}>Active</div>}
                    {number}
                </div>
            </Pagination.Item >,
        );
    }
    // useEffect(() => { console.log(current) }, [activePage])
    return (
        <div>
            <Pagination.Prev key="prev" onClick={() => setActivePage(current - 1)} />
            <Pagination> <div style={{
                display: "flex",
                justifyContent: 'between',
                alignItems: 'center',
                flexDirection: "column",
                gap: "2"
            }}>
                {items}
            </div>
            </Pagination>
            <Pagination.Next onClick={() => setActivePage(current + 1)} />
        </div>
    );

}
