import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';


export default function SuperherosTable({ rows }: { rows: { name: string; superpower: string; humilityScore: number; }[] }) {
    return (
        <TableContainer>
            <Table sx={{ minWidth: 650 }} aria-label="simple table">
                <TableHead>
                    <TableRow>
                        <TableCell style={{ color: 'white' }}><b>Name</b></TableCell>
                        <TableCell align="center" style={{ color: 'white' }}><b>Superpower</b></TableCell>
                        <TableCell align="right" style={{ color: 'white' }}><b>Humility Score</b></TableCell>
                    </TableRow>
                </TableHead>
                <TableBody>
                    {rows.map((row) => (
                        <TableRow
                            key={row.name}
                            sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
                        >
                            <TableCell component="th" scope="row" style={{ color: 'white' }}>
                                {row.name}
                            </TableCell>
                            <TableCell align="center" style={{ color: 'white' }}>{row.superpower}</TableCell>
                            <TableCell align="right" style={{ color: 'white' }}>{row.humilityScore}</TableCell>
                        </TableRow>
                    ))}
                </TableBody>
            </Table>
        </TableContainer>
    );
}
