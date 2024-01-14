import {Ptag} from '@/components/Ptag/Ptag';
import {Button} from '@/components/Button/button';
import {Htag} from '@/components/Htag/Htag';
import {Tag} from '@/components';
import {Rating} from '@/components/Rating';
import {useState} from 'react';

// const inter = Inter({subsets: ['latin']});

export default function Home() {
  const [rating, setRatting] = useState<number>(0);
  const [rating1, setRatting1] = useState<number>(0);

  return (
    <div>

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
    </div>
  );
}
