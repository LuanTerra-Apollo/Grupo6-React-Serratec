import { Link } from "react-router-dom"
import {Form} from "../../components/styles/Forms.style"
import { Wrapper } from "../../components/styles/Wrapper.style"
import { Input, H1 } from "../../components/styles/Inputs.style"
import { Button } from "../../components/styles/Buttons.style"

const Cadastro = () => {
    return (
        <>
            <Wrapper>
            <Form width='40%' height='70%' className='formLogin'>
                <H1 style={{fontSize: '450%', marginTop: '30px', marginBottom:'50px'}}>Cadastro</H1>
                <Input style={{marginBottom:'-25px'}} width='75%' height='7%' type="text"  placeholder='nome' /> <br />
                <Input style={{marginBottom:'-25px'}} width='75%' height='7%' type="text"  placeholder='email' /> <br />
                <Input style={{marginBottom:'-25px'}} width='75%' height='7%' type="text" placeholder='senha'  /> <br />
                <Input width='75%' height='7%' type="text" placeholder='confirmar senha'  /> <br />
                <Button width='30%' height='70px' type='submit'>Cadastrar</Button> <br />
                <Link style={{color: "#007094", fontWeight: 'bold', fontSize:'24px', position: 'absolute', bottom: '16%'}} to={'/login'} >Já possui conta?</Link>
            </Form>
        </Wrapper>
        <br />
        </>
    )
}

export default Cadastro