import { Badge } from '@material-ui/core';
import { Search, ShoppingCartOutlined } from '@material-ui/icons';
import React from 'react'
import styled from 'styled-components'


const Container= styled.div`
height:60px;


`;
const Wrapper =styled.div`

padding:10px 20px;
display:flex;
align-items: center;
justify-content:space-between;

`;
const Left=styled.div`

flex:1;
display: flex;
align-items: center;
`;
const Languages=styled.span`
    font-size: 14px;
    cursor: pointer;
`;

const Searchcontainer=styled.div`
border: .5px solid lightgray;
display: flex;
align-items: center;
margin-left: 25px;
padding: 5px;
`
const Input=styled.input`
    border: none;
`;
const Center=styled.div`
flex:1;
text-align: center;
`;

const Logo=styled.h1`
font-weight:bold;
`
const Right=styled.div`
flex:1;
display: flex;
align-items: center;
justify-content: flex-end;
`;
const MenuItem=styled.div`
    font-size: 14px;
    cursor: pointer;
    margin-left: 25px;
`;



const Navbar = () => {
  return (
    <Container>
        <Wrapper>
            <Left><Languages>EN</Languages>
                <Searchcontainer>
                <Input/>
                <Search style={{color:"gray",fontSize:16}}/>
                </Searchcontainer>
            
            </Left>
            <Center><Logo>Lana.</Logo></Center>
            <Right>
            
                <MenuItem>Register</MenuItem>
                
                <MenuItem>Sing In</MenuItem>
                
                <MenuItem>

                    <Badge badgeContent={4} color="primary">
                    <ShoppingCartOutlined/>
                    </Badge>        
                </MenuItem>
            
            
            </Right>
        </Wrapper>
      
    </Container>
  )
}

export default Navbar