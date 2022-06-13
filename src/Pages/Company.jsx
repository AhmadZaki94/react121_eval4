import { Select, Box, Text } from '@chakra-ui/react';
export const Company = () => {

    return (
        <Box>
            <Text>Company Page</Text>
            <Select placeholder='Select option'>
                <option value='option1'>Linkedin</option>
                <option value='option2'>Masai</option>
                <option value='option3'>Flipkart</option>
            </Select>
        </Box>
        
    )
}