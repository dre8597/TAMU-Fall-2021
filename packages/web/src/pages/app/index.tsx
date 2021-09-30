import { Heading } from '@chakra-ui/react';
import { NextPage } from 'next';
import { AppLayout } from '../../components/Layout';
import { Button, HStack, Text, VStack} from '@chakra-ui/react';
import React from 'react';
import Link from 'next/link';
import { GiCrossFlare } from 'react-icons/gi';

var rating = 0;
const likeClick = () =>  {
  rating = 1;
  console.log('Rating =', rating);
}

const dislikeClick = () =>  {
  rating = 0;
  console.log('Rating =', rating);
}

const AppHome: NextPage = () => {
  return (
    <AppLayout>
      <HStack>
        <Link href="/app" passHref>
          <GiCrossFlare size="36px" />
        </Link>
        <Heading>Map Page</Heading>
      </HStack>
      

      <HStack spacing={4}>
          <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d8056797.409045885!2d-81.51540782360875!3d38.663775338374435!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x89c24fa5d33f083b%3A0xc80b8f06e177fe62!2sNew%20York%2C%20NY!5e0!3m2!1sen!2sus!4v1633021715260!5m2!1sen!2sus"
          width="700" height="550" loading="lazy"></iframe>
          <Button as="a" size="md" colorScheme="blue" target="_blank" onClick={likeClick}>
            Like
          </Button>
          <Button as="a" size="md" colorScheme="gray" target="_blank" onClick={dislikeClick}>
            Dislike
          </Button>
        </HStack>
    </AppLayout>
    
  );
};

export default AppHome;
