const validatePhone = (phone) => {
    if(String(phone).toLowerCase().match(/^[\+]?[(]?[0-9]{3}[)]?[-\s\.]?[0-9]{3}[-\s\.]?[0-9]{4,6}$/)){
        return true
    }
  }
  

  export default validatePhone