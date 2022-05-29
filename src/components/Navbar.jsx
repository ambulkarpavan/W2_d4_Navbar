import React from 'react'
import {
    Popover,
    PopoverTrigger,
    PopoverContent,
    PopoverHeader,
    PopoverBody,
    PopoverFooter,
    PopoverArrow,
    PopoverCloseButton,
    PopoverAnchor,
    Button,
  } from '@chakra-ui/react'
  import styles from './Navbar.module.css'

//   import { Button, ButtonGroup } from '@chakra-ui/react'

const Navbar = () => {
  return (
      <div className={styles.main}>
        <div className={styles.logo} >
          <p >Logo</p></div>
<Popover isLazy >
  <PopoverTrigger>
    <Button backgroundColor="white" _hover={{backgroundColor:"white"}} color= "gery"  >Inspiration</Button>
  </PopoverTrigger>
  <PopoverContent outline="none" >
      <div>
      <PopoverHeader fontWeight='semibold' border="none" >Explore Design Work</PopoverHeader>
    {/* <PopoverArrow /> */}
    {/* <PopoverCloseButton /> */}
    <PopoverBody  marginTop="-20px">
     Trending Design to inspire you
    </PopoverBody>
      </div>
   <div>
   <PopoverHeader fontWeight='semibold' border="none" >New & Noteworthy</PopoverHeader>
    {/* <PopoverArrow /> */}
    {/* <PopoverCloseButton /> */}
    <PopoverBody  marginTop="-20px">
     Up-and-Comings Designers
    </PopoverBody>
   </div>
   
  </PopoverContent> 
</Popover>

{/* btn2 */}

<Popover isLazy >
  <PopoverTrigger>
    <Button backgroundColor="white" _hover={{backgroundColor:"white"}} color= "gery"  >Find Work</Button>
  </PopoverTrigger>
  <PopoverContent outline="none" >
      <div>
      <PopoverHeader fontWeight='semibold' border="none" >Job Board</PopoverHeader>
    {/* <PopoverArrow /> */}
    {/* <PopoverCloseButton /> */}
    <PopoverBody  marginTop="-20px">
     Find your dream design job.
    </PopoverBody>
      </div>
   <div>
   <PopoverHeader fontWeight='semibold' border="none" >Freelance Projects</PopoverHeader>
    {/* <PopoverArrow /> */}
    {/* <PopoverCloseButton /> */}
    <PopoverBody  marginTop="-20px">
    An exclusive list of contract work
    </PopoverBody>
   </div>
   
  </PopoverContent> 
</Popover>

{/* btn 3 */}
<Popover isLazy >
  <PopoverTrigger>
    <Button backgroundColor="white" _hover={{backgroundColor:"white"}} color= "gery"  >Learn Design</Button>
  </PopoverTrigger>
</Popover>


  {/* btn 4 */}
  <Popover isLazy >
  <PopoverTrigger>
    <Button backgroundColor="white"_hover={{backgroundColor:"white"}} color= "gery" >Hire Designers</Button>
  </PopoverTrigger>
  </Popover>
  <Button  variant='link' className={styles.signin}>
    Sign In
  </Button>
  {/* <Button  className={styles.signin}><a src="#">Sign In</a></Button> */}

<Button  colorScheme='#ed64a6' className={styles.signup}>Sign Up</Button>
      </div>

  )
}

export default Navbar