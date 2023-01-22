import React, {useState, FormEvent, ChangeEvent} from 'react';
import {useNavigate} from "react-router-dom";
import { withTheme } from "styled-components";
import {HeroText, HeroSubText, HeroWrapper, OverridePageWrapper} from "../../styles/reusables";
import { Button } from "../../components/Button";
import {ContactForm, ContactFormWrapper} from "./styles";
import {PurpleSpan} from "../../components/PurpleSpan";

interface ContactPageProps {
    theme: {};
}
type FormData = {
    name: string;
    email: string;
    message: string;
}

const ContactPage: React.FC<ContactPageProps> = (props) => {
    const navigate = useNavigate();
    const initialForm: FormData = {
        name: "",
        email: "",
        message: "",
    }
    const [formData, setFormData] = useState<FormData>(initialForm);
    const { name, email, message } = formData;

    function encode(data: Record<string, string>) {
        return Object.keys(data)
            .map(
                (key) =>
                    encodeURIComponent(key) + "=" + encodeURIComponent(data[key])
            )
            .join("&");
    }

    function handleSubmit(e: FormEvent<HTMLFormElement>): void {
        e.preventDefault();
        fetch("/", {
            method: "POST",
            headers: { "Content-Type": "application/x-www-form-urlencoded" },
            body: encode({"form-name": "contact", ...formData}),
        })
            .then(() => {
                navigate("/thank-you/")
                setFormData(initialForm)
            })
            .catch((error) => navigate("/error-page"));
    }
    function handleInput(e: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>): void {
        setFormData({...formData, [e.target.name]: e.target.value})
    }
    return (<OverridePageWrapper padding={'1rem'}>
        <HeroWrapper>
            <HeroText><PurpleSpan>Otterly</PurpleSpan> Contact (able)</HeroText>
            <HeroSubText>Idea for a text adventure? Problem with a game? Want to tell us how amazing we are? Need to
                borrow a phone charger? Hit up the Otterly team in the form below!</HeroSubText>
        </HeroWrapper>
        <ContactFormWrapper>
            <ContactForm
                name={"contact"}
                method={"POST"}
                netlify-honeypot={"subject"}
                data-netlify={"true"}
                onSubmit={(e) => handleSubmit(e)}
            >
                <input type={"hidden"} name={"form-name"} value={"contact"} />
                <label>Name</label>
                <input type={"text"} name={"name"} value={name} onChange={(e) => handleInput(e)}/>
                <p hidden><label>subject</label><input name={"subject"}/></p>
                <label>Email</label>
                <input type={"email"} name={"email"} value={email} onChange={(e) => handleInput(e)}/>
                <label>Message</label>
                <textarea maxLength={1000} cols={30} rows={15} name={"message"} value={message} onChange={(e) => handleInput(e)}></textarea>
                <p>{message.length}/1000</p>
                <Button type={"submit"} color={'#b907eb'}>submit</Button>
            </ContactForm>
        </ContactFormWrapper>
    </OverridePageWrapper>);
}
export default withTheme(ContactPage);