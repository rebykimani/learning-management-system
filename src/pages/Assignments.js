import React, { useEffect, useState } from 'react';
import Typography from '@mui/material/Typography';
// material
import {
    Container,
    Stack,
    Box,
    LinearProgress,
    TableBody,
    TableRow,
    TableCell
} from '@mui/material';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
// components
//
import { styled } from '@mui/material/styles';
import { filter } from 'lodash';
import Page from '../Components/Page';
// import FormDialog from '../components/faq/Create'

function descendingComparator(a, b, orderBy) {
    if (b[orderBy] < a[orderBy]) {
        return -1;
    }
    if (b[orderBy] > a[orderBy]) {
        return 1;
    }
    return 0;
}

function getComparator(order, orderBy) {
    return order === 'desc'
        ? (a, b) => descendingComparator(a, b, orderBy)
        : (a, b) => -descendingComparator(a, b, orderBy);
}

function applySortFilter(array, comparator, query) {
    const stabilizedThis = array.map((el, index) => [el, index]);
    stabilizedThis.sort((a, b) => {
        const order = comparator(a[0], b[0]);
        if (order !== 0) return order;
        return a[1] - b[1];
    });
    if (query) {
        return filter(
            array,
            (_faq) =>
                _faq.question.toLowerCase().indexOf(query.toLowerCase()) !== -1 ||
                _faq.answer.toLowerCase().indexOf(query.toLowerCase()) !== -1
        );
    }
    return stabilizedThis.map((el) => el[0]);
}
const LinearProgressStyle = styled(LinearProgress)(({ theme }) => ({
    marginTop: theme.spacing(30),
    maxWidth: '20%',
    margin: 'auto'
}));
export default function Assignments() {
    const [filterName, setFilterName] = useState('');
    // const [
    //     selected
    //     /* setSelected */
    // ] = useState([]);
    // const dispatch = useDispatch();
    // const isLoading = useSelector((state) => state.reducer.faqsReducer.isLoading);
    // const faqs = useSelector((state) => state.reducer.faqsReducer.faqsList);
    //
    // const handleFilterByName = (event) => {
    //     setFilterName(event.target.value);
    // };
    // const filteredFaqs = applySortFilter(faqs, getComparator('asc', 'question'), filterName);
    // const isFaqNotFound = filteredFaqs.length === 0;
    //
    // useEffect(() => {
    //     getFaqs({
    //         dispatch
    //     });
    // }, [dispatch]);
    return (
        <Page title="Dashboard: Assignments">
            <Container>
                <Stack direction="row" alignItems="center" justifyContent="space-between" mb={5}>
                    <Typography variant="h4" gutterBottom>
                        Assignments
                    </Typography>
                    {/*<FormDialog />*/}
                </Stack>
                <div>
                    <Box> These are my assignments</Box>
                </div>
            </Container>
        </Page>
    );
}
