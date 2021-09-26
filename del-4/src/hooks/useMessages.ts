import {
    query,
    collection,
    getFirestore,
    orderBy,
    limit,
    onSnapshot,
    addDoc,
} from "firebase/firestore";
import { useEffect, useState } from "react";
import { useUser } from "../context/UserProvider";

interface UseCollectionProps {
    collection: string;
    orderBy: string;
}

export interface Message {
    id: string;
    message: string;
    date: string;
    userId: string;
    name: string;
    photo?: string;
}

const useCollection = (props: UseCollectionProps) => {
    const [messages, setMessages] = useState<Message[]>([]);
    const recentMessagesQuery = query(
        collection(getFirestore(), props.collection),
        orderBy(props.orderBy, "asc"),
        limit(25)
    );
    const user = useUser();

    useEffect(() => {
        const unsub = onSnapshot(recentMessagesQuery, snapshot => {
            const updatedItems = snapshot.docs.map(snapshot => {
                const data = snapshot.data();
                const res = {
                    id: snapshot.id,
                    message: data.message,
                    date: data.date,
                    userId: data.userId,
                    name: data.name,
                    photo: data.photo,
                } as Message;
                return res;
            });
            setMessages(updatedItems);
        });

        return () => {
            unsub();
        };
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, []);

    const sendMessage = async (message: string) => {
        await addDoc(collection(getFirestore(), "messages"), {
            name: user?.displayName,
            message: message,
            date: new Date().toISOString(),
            userId: user?.uid,
            photo: user?.photoURL,
        });
    };

    return { messages, sendMessage };
};

export default useCollection;
