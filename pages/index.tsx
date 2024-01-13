import {Inter} from 'next/font/google';
import {Htag} from '@/components/Htag/Htag';
import {Button} from '@/components/button/button';

// const inter = Inter({subsets: ['latin']});

export default function Home() {
  return (
    <div>

      <Button appearance={'primary'} arrow={"right"}>primary</Button>
      <Button appearance={'primary'} arrow={"down"}>primary</Button>
      <Button appearance={'primary'}>primary</Button>
      <Button onClick={() => console.log('ghost')} appearance={'ghost'}>ghost</Button>
      <Htag tag={'h1'}>aaaaassaaa</Htag>
      <Htag tag={'h2'}>aaaaassaaa</Htag>
      <Htag tag={'h3'}>aaaaassaaa</Htag>
    </div>
  );
}
