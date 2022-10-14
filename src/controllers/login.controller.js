const http = require('http');
const url = require('url');
export async function logIn(req, res, next) {
    //validaciones
    /*const { error } = schemaLogin.validate(req.body);
    if(error) return res.status(400).json({ error: error.details[0].message });

    const user = await Usuario.findOne({ email: req.body.email });
    if(!user) return res.status(400).json({ error: "Usuario no encontrado" });

    console.log(user)
    const validPassword = await bcrypt.compare(req.body.password, user.password);
    if(!validPassword)
        return res.status(400).json({ error: "contraseña no valida" });*/
        //const http = require('http');
        //const url = require('url');
    const queryObj = url.parse(req.url, true).query;
    console.log(req.url)
    console.log(queryObj)

    /*const token = jwt.sign(
        {
            name: user.name,
            id: user._id,
        },
        process.env.TOKEN_SECRET,
        { expiresIn: 86400 }
    );

    res.header("auth-token", token).json({
        error: null,
        data: { token },
    });*/
    res.header("auth-token", "HOLA").json({
        error: null,
        data: { "token":"HOLA papis" }
    });
}