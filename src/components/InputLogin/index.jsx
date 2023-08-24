import Label from './styles'

import {useState} from 'react'

import {AiOutlineEye as EyeVisible} from 'react-icons/ai'
import {AiOutlineEyeInvisible as EyeInvisible} from 'react-icons/ai'

function InputLogin({ type, txt, name, onChange,placeholder, autoComplete = 'off', value }) {
    const [showPassword, setShowPassword] = useState(false)

    const handlePassword = () =>{
        setShowPassword(prev => !prev)
    }

    return (
        <Label>
            {txt}
            <div className='conteiner-input'>
                < input
                    type={showPassword ? 'text' : type}
                    name={name}
                    id={name}
                    onChange={onChange}
                    placeholder={placeholder}
                    autoComplete={autoComplete}
                    value={value}
                    required
                />
                {type == 'password' && (
                    showPassword ? (
                            <EyeInvisible size={23} onClick={handlePassword}/>
                        ):(
                            <EyeVisible size={23} onClick={handlePassword} />
                        )
                )}
            </div>
            
        </Label>
    );
}

export default InputLogin;