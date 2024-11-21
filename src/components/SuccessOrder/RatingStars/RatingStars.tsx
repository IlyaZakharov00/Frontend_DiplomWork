import * as React from 'react';
import Rating from '@mui/material/Rating';
import Box from '@mui/material/Box';
import StarIcon from '@mui/icons-material/Star';
import Stack from '@mui/material/Stack';

const labels: { [index: string]: string } = {
    1: 'Очень плохо',
    2: 'Плохо',
    3: 'Удовлетворительно',
    4: 'Хорошо',
    5: 'Отлично',
};

function getLabelText(value: number) {
    return `${value} Star${value !== 1 ? 's' : ''}, ${labels[value]}`;
}

export default function RatingStars() {
    const [value, setValue] = React.useState<number | null>(5);
    const [hover, setHover] = React.useState(-1);

    return (
        <Stack spacing={1}>
            <div className='d-flex flex-column flex-lg-row align-items-center gap-3'>
                    <Rating
                        name="hover-feedback"
                        value={value}
                        getLabelText={getLabelText}
                        sx={{
                            fontSize: "4rem"
                        }}
                        onChange={(_event, newValue) => {
                            setValue(newValue);
                        }}
                        onChangeActive={(_event, newHover) => {
                            setHover(newHover);
                        }}
                        icon={<StarIcon style={{ width: "32px", height: "32px" }}></StarIcon>}
                        emptyIcon={<StarIcon style={{ opacity: 0.55, width: "32px", height: "32px" }} />}
                    />
                    {value !== null && (
                        <Box>{labels[hover !== -1 ? hover : value]}</Box>
                    )}
            </div>
        </Stack>
    );
}