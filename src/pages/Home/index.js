import { useState } from 'react';
import Button from '~/Layout/components/Button';

export default function Home() {
    const [walletAddress, setWalletAddress] = useState();
    const connectMetamask = async () => {
        if (typeof window != 'undefined' && typeof window.ethereum != 'undefined') {
            try {
                const accounts = await window.ethereum.request({ method: 'eth_requestAccounts' });
                setWalletAddress(accounts[0]);
            } catch (err) {
                console.error(err.message);
            }
        } else {
            console.log('Please install Metamask');
        }
    };
    const connectContract = () => {};
    const readContract = () => {};
    return (
        <div>
            <Button onClick={connectMetamask}>CONNECT TO METAMASK</Button>
            <p id="accountArea">{walletAddress ?? ''}</p>
            <Button onClick={connectContract}>CONNECT TO CONTRACT</Button>
            <p id="contractArea"></p>
            <Button onClick={readContract}>GET DATA FROM CONTRACT</Button>
            <p id="dataArea"></p>
        </div>
    );
}
