import { Link } from "react-router-dom"
import {Form} from "../../components/styles/Forms.style"
import { Wrapper } from "../../components/styles/Wrapper.style"
import { Input } from "../../components/styles/Inputs.style"
import { Button } from "../../components/styles/Buttons.style"

const Cadastro = () => {
    return (
        <>
            <Wrapper>
            <Form width='700px' height='700px' className='formLogin'>
                <h1 style={{fontSize: '60px', marginTop: '24px', marginBottom:'60px'}}>Cadastro</h1>
                <Input style={{marginBottom:'-36px'}} width='606px' height='43px' type="text"  placeholder='nome' /> <br />
                <Input style={{marginBottom:'-36px'}} width='606px' height='43px' type="text"  placeholder='email' /> <br />
                <Input style={{marginBottom:'-36px'}} width='606px' height='43px' type="text" placeholder='senha'  /> <br />
                <Input width='606px' height='43px' type="text" placeholder='confirmar senha'  /> <br />
                <Button width='215px' height='70px' type='submit'>Cadastrar</Button> <br />
                <Link style={{color: "#007094", fontWeight: 'bold', fontSize:'24px', position: 'absolute', transform: 'translate(0%, 1150%)'}} to={'/cadastro'} >Já possui conta?</Link>
            </Form>
        </Wrapper>
        <br />
        </>
    )
}

export default Cadastro