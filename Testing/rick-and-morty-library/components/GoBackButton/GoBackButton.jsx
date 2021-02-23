import { useRouter } from 'next/router';
import ArrowLeftIcon from 'components/icons/ArrowLeftIcon';
import { container, icon } from './GoBackButton.module.scss';

const GoBackButton = () => {
    const router = useRouter();

    return (
        <button
            onClick={() => router.back()}
            type='button'
            className={container}
            aria-label='Go back button'
        >
            <ArrowLeftIcon className={icon} />
        </button>
    );
};

export default GoBackButton;
