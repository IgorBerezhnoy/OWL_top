import {Ptag} from '@/components/Ptag/Ptag';
import {Button} from '@/components/Button/button';
import {Htag} from '@/components/Htag/Htag';
import {Card, Input, Search, Tag, Textarea} from '@/components';
import {Rating} from '@/components/Rating';
import {JSX, useState} from 'react';
import {withLayout} from '@/layout';
import {GetStaticProps} from 'next';
import axios from 'axios';
import {MenuItem} from '@/interfaces/menu.interface';

// const inter = Inter({subsets: ['latin']});

export default withLayout(function Home({menu, firstCategory}: HomeProps): JSX.Element {
  const [rating, setRatting] = useState<number>(0);
  const [rating1, setRatting1] = useState<number>(0);
  console.log(menu, firstCategory);
  return (
    <>
      <Search/>
      <Input/>
      <Input placeholder={'aaaaaa'}/>
      <Textarea placeholder={'aaaaaa'}/>
      <Textarea/>
      <Card>aaaaaaaaaa</Card>
      <Card color={'blue'}>aaaaaaaaaa</Card>
      <Card color={'white'}>aaaaaaaaaa</Card>
      <Button appearance={'primary'} arrow={'right'}>primary</Button>
      <Button appearance={'ghost'} arrow={'right'}>primary</Button>
      <Button appearance={'primary'} arrow={'down'}>primary</Button>
      <Button appearance={'primary'}>primary</Button>
      <Button onClick={() => console.log('ghost')} appearance={'ghost'}>ghost</Button>
      <Htag tag={'h1'}>aaaaassaaa</Htag>
      <Htag tag={'h2'}>aaaaassaaa</Htag>
      <Htag tag={'h3'}>aaaaassaaa</Htag>
      <Ptag size={'small'}>aaaaassaaa</Ptag>
      <Ptag>aaaaassaaa</Ptag>
      <Ptag size={'middle'}>aaaaassaaa</Ptag>
      <Ptag size={'large'}>aaaaassaaa</Ptag>
      <Tag isLink={true} href={'#'} color={'primary'} size={'small'}>aaaaassaaa</Tag>
      <Tag color={'ghost'} size={'small'}>aaaaassaaa</Tag>
      <Tag color={'grey'} size={'small'}>aaaaassaaa</Tag>
      <Tag>aaaaassaaa</Tag>
      <Tag color={'red'} size={'middle'}>aaaaassaaa</Tag>
      <Tag size={'large'} color={'grey'}>aaaaassaaa</Tag>
      <Tag size={'large'} color={'green'}>aaaaassaaa</Tag>
      <Rating rating={rating} setRating={setRatting}/>
      <Rating rating={rating1} isEditable={false} setRating={setRatting1}/>

    </>
  );
});

export const getStaticProps: GetStaticProps = async () => {
  const firstCategory = 0;
  const {data: menu} = await axios.post<MenuItem[]>(process.env.NEXT_PUBLIC_DOMAIN + '/api/top-page/find', {
    firstCategory
  });
  return {
    props: {
      menu,
      firstCategory
    }
  };
};

interface HomeProps extends Record<string, unknown> {
  menu: MenuItem[],
  firstCategory: number
}