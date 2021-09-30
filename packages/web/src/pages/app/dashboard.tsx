import { Heading } from '@chakra-ui/react';
import { NextPage } from 'next';
import { AppLayout } from '../../components/Layout';

const DashboardHome: NextPage = () => {
  return (
    <AppLayout>
      <Heading>Dashboard Home</Heading>
    </AppLayout>
  );
};

export default DashboardHome;
