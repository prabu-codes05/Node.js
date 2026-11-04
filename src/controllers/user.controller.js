import data from "../../data.json" with {type: "json"};

class usercontroller{
    static getAllUsers(req, res) {   //method
        try {
            const users = data;
            if (!users || users.length == 0) {
                return res.status(404).json({
                    message: "No users Found!!!",
                    success:false
                })
            }
            return res.status(200).json({
                message: "users Found successfully",
                success: true,
                data:users
            })
        } catch (err) {
            return res.status(500).json({
                message: "Internal server Error",
                success:false
            })
        }
    }
    static PostUser(req, res) {
        try {
            const { name, email, age, address, phone, isActive, department, salary, role } = req.body
            if (!name || !email || !age || !address || !isActive || !department || !salary || !role) {
                return res.status(400).json({
                    message: "Bad Request",
                    success:false
                })
            }
            const newUsers = {
                id: data.length + 1,
                name,
                email,
                age,
                address,
                isActive,
                department,
                salary,
                role
            }
            data.push(newUsers)
            return res.status(201).json({
                message: "User Created successfully",
                sucess: true,
                data:newUsers
            })
        } catch (error) {
            return res.status(500).json({
                message: "Internal Server Error",
                success:false
            }) 
        }
    }

    static UpdateUser(req, res) {
        const id = parseInt(req.params.id)  //integer format ma convert garna
        try {
            const findUser = data.find(user => user.id === id)
            if (!findUser) {
                return res.status(404).json({
                    message: "User Not Found",
                    success: false
                })
                if (!name || !email || !age || !address || !isActive || !department || !salary || !role) {
                    return res.status(400).json({
                        message: "Bad Request",
                        success: false
                    })

                }

                const updateUser = {
                    name,
                    email,
                    age,
                    address,
                    isActive,
                    department,
                    salary
                }

                  return res.status(200).json({
                    message: "User updated successfully",
                      success: true,
                    data:updateUser
                  })

                
            }

            
        } catch (err) {
            return res.status(500).json({
                message: "Internal Server Error",
                success:false
         })
        }
    }
}

export default usercontroller