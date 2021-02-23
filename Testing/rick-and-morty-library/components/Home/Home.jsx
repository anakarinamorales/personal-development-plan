import Button from 'components/Button/Button';
import { container } from './Home.module.scss';

const Home = () => (
    <main className={container}>
        <Button type='a' href='/list/characters'>
            See all Characters
        </Button>

        <span>See character from: </span>

        <Button type='a' href='/list/locations'>
            Location
        </Button>

        <Button type='a' href='/list/episodes'>
            Episodes
        </Button>
    </main>
);

export default Home;
