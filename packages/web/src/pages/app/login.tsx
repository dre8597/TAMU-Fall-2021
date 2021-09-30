// import { Heading } from '@chakra-ui/react';
// import { AppLayout } from '../../components/Layout';

// export default() => {
//     return (
//         <AppLayout>
//       <Heading>Login Page</Heading>
//     </AppLayout>
//     );
// }

import {
    ThemeProvider,
    theme,
    ColorModeProvider,
    CSSReset,
    Box,
    Flex,
    IconButton,
    useColorMode,
    Heading,
    Text,
    Link,
    FormControl,
    FormLabel,
    Input,
    Stack,
    Checkbox,
    Button
  } from '@chakra-ui/react'
import { NextPage } from 'next';
import { AppLayout } from '../../components/Layout';


const VARIANT_COLOR = 'blue'

const App = () => {
    return (
        <AppLayout>
        <ThemeProvider theme={theme}>
 
        <CSSReset />
        <LoginArea />

    </ThemeProvider>
      </AppLayout>
    )
  }

  const LoginForm = () => {
    return (
      <Box my={8} textAlign='left'>
        <form>
  
          <FormControl>
            <Input type='email' placeholder='Username' />
          </FormControl>
  
          <FormControl mt={4}>
            <Input type='password' placeholder='Password' />
          </FormControl>
  
          <Stack isInline justifyContent='space-between' mt={4}>
              <Box>
                <Checkbox>Remember Me</Checkbox>
              </Box>
              <Box>
                <Link color={`${VARIANT_COLOR}.500`}>Forgot your password?</Link>
              </Box>
          </Stack>
  
          <Button variantColor={VARIANT_COLOR}  width='full' mt={4}>Sign In</Button>
        </form>
      </Box>
    )
    }

    const LoginArea = () => {
        return (
          <Flex minHeight='100vh' width='full' align='center' justifyContent='center'>
            
              <ThemeSelector />
              <Box p={4}>
                <LoginHeader />
                <LoginForm />
              </Box>
         
          </Flex>
        )
      }

      const ThemeSelector = () => {
        const { colorMode, toggleColorMode } = useColorMode()
      
        return (
          <Box textAlign='right' py={4}>

          </Box>
        )
      }
      const LoginHeader = () => {
        return (
          <Box textAlign='center'>
            <Heading>AAVisualization</Heading>
          </Box>
        )
      }

      
  export default App  