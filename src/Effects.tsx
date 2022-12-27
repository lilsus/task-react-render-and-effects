import { subscribe, unsubscribe } from './resources/API';
import { useEffect, useState } from 'react';

export function Effects(props: { sourceId: string }) {
    const [data, setData] = useState<number>(-1);
    useEffect(() => {
        setData(-1);
        const listen = (data: number) => setData(data);
        subscribe(props.sourceId, listen);
        return () => unsubscribe(props.sourceId, listen);
    }, [props.sourceId]);
    return (
        <div>
            {props.sourceId}: {data}
        </div>
    );
}
