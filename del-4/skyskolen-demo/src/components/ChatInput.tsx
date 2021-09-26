import { FormControl, InputGroup } from "react-bootstrap";
import { BsFillChatFill } from "react-icons/bs";

interface ChatInputProps {
    value: string;
    onChange: (value: string) => void;
}

const ChatInput: React.FC<ChatInputProps> = ({ value, onChange }) => {
    const handleEnterPress = (e: any) => {
        e.preventDefault();
        onChange(e.target.value);
    };

    return (
        <InputGroup className='chat-input'>
            <InputGroup.Text id='basic-addon1'>
                <BsFillChatFill />
            </InputGroup.Text>
            <FormControl
                placeholder='Write your message'
                aria-label='Message'
                aria-describedby='basic-addon1'
                value={value}
                onChange={e => handleEnterPress(e)}
            />
        </InputGroup>
    );
};

export default ChatInput;
