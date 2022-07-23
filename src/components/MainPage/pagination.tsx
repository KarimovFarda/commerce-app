import React from 'react'
import Pagination from '@mui/material/Pagination';
import Stack from '@mui/material/Stack';
export const PaginationComponent = ({ totalPageCount, handlePageChange, currentPage }: any) => {
    var elements = [];
    for (var x = totalPageCount - 1; x >= 0; x--) {
        elements.push(x)
    }

    console.log(elements)
    return (
        <Stack spacing={2} >
            <Pagination count={elements.reverse().length} onClick={(e) => {
                const target = e.target as HTMLInputElement;
                if (target.innerHTML.includes("path")) {
                    if (target.innerHTML.includes("M15")) {
                        handlePageChange(Math.max(currentPage - 1, 1));
                    } else {
                        handlePageChange(Math.min(currentPage + 1, totalPageCount));
                    }
                } else {
                    handlePageChange(+target.innerHTML[0]);
                }
            }} />

        </Stack>
    )

}
export default PaginationComponent