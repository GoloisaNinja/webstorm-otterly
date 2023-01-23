import React, {useState, useEffect, useCallback, FormEvent, ChangeEvent} from 'react';
import {useNavigate} from "react-router-dom";
import { withTheme } from "styled-components";
import {HeroText, HeroSubText, HeroWrapper, OverridePageWrapper} from "../../styles/reusables";
import { Button } from "../../components/Button";
import {ContactForm, ContactFormWrapper} from "./styles";
import {PurpleSpan} from "../../components/PurpleSpan";

interface ContactPageProps {
    theme: {
        button_purple: string;
    };
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

    const inputCheck = useCallback(() => {
        let button = document.getElementById("btn-submit")!
        if (!!name && !!email && !!message) {
            button.classList.add("isActive")
        } else {
            button.classList.remove("isActive")
        }
    },[email, message, name])
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
                setFormData(initialForm)
                navigate("/thank-you/")

            })
            .catch((error) => navigate("/error-page"));
    }
    function handleInput(e: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>): void {
        setFormData({...formData, [e.target.name]: e.target.value})

    }
    useEffect(() => {
        inputCheck()
    },[formData, inputCheck])
    return (<OverridePageWrapper padding={'1rem'}>
        <HeroWrapper>
            <HeroText><PurpleSpan>Otterly</PurpleSpan> Contact (able)</HeroText>
            <HeroSubText>idea for a text adventure? problem with a game? want to tell us how amazing we are? need to
                borrow a phone charger? hit up the Otterly team in the form below!</HeroSubText>
        </HeroWrapper>
        <ContactFormWrapper>
            <p>*all form fields required</p>
            <ContactForm
                name={"contact"}
                method={"POST"}
                netlify-honeypot={"subject"}
                data-netlify={"true"}
                onSubmit={(e) => handleSubmit(e)}
            >
                <input type={"hidden"} name={"form-name"} value={"contact"} />
                <label>Name</label>
                <input type={"text"} name={"name"} value={name} onChange={(e) => handleInput(e)} required/>
                <p hidden><label>subject</label><input name={"subject"}/></p>
                <label>Email</label>
                <input type={"email"} name={"email"} value={email} onChange={(e) => handleInput(e)} required/>
                <label>Message</label>
                <textarea maxLength={1000} cols={30} rows={15} name={"message"} value={message} onChange={(e) => handleInput(e)} required></textarea>
                <p>{message.length}/1000</p>
                <Button id="btn-submit" type={"submit"} color={props.theme.button_purple}>submit</Button>
            </ContactForm>
        </ContactFormWrapper>
    </OverridePageWrapper>);
}
export default withTheme(ContactPage);