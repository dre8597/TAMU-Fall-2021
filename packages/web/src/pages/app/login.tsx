
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
    Button,
    CircularProgress
  } from '@chakra-ui/react'
import { AppLayout } from '../../components/Layout';
import React, { useState, useEffect } from "react";
//@ts-ignore
import { userLogin } from '../../utils/api';
//@ts-ignore
import ErrorMessage from '../../components/ErrorMessage';



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

    
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');
    const [error, setError] = useState('');
    const[isLoading, setIsLoading] = useState(false);

    const registerUser = async (event: React.SyntheticEvent) => {
        
        event.preventDefault();
        setIsLoading(true);

        try {
          await userLogin({ username, password });
          setIsLoading(false);
        } catch (error) {
          setError('Invalid username or password');
          setIsLoading(false);
          setUsername('');
          setPassword('');
          
        }        
    
    }


    return (
      <Box my={8} textAlign='left'>
        <form onSubmit={registerUser}>
        {error && <ErrorMessage message={error} />}
          <FormControl>
            <Input 
                type='username' 
                placeholder='Username' 
                onChange= {event => setUsername(event.currentTarget.value)}/>
          </FormControl>
  
          <FormControl mt={4}>
            <Input type='password' 
            placeholder='Password' 
            onChange= {event => setPassword(event.currentTarget.value)}/>
          </FormControl>
  
          <Stack isInline justifyContent='space-between' mt={4}>
              <Box>
                <Checkbox>Remember Me</Checkbox>
              </Box>
              <Box>
                <Link color={`${VARIANT_COLOR}.500`}>Forgot your password?</Link>
              </Box>
          </Stack>
  
          <Button type='submit' variantColor={VARIANT_COLOR}  width='full' mt={4}>{isLoading ? (
    <CircularProgress isIndeterminate size="24px" color="teal" />
  ) : (
    'Sign In'
  )}</Button>
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

