import { Box } from "@chakra-ui/react"

export default function IconBox(props) {
    return (<Box
              as="img"
              src={props.src}
              alt={props.alt}
              w="25px"
              h="25px"
            />
)}