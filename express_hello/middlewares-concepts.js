/**
 *
 *
 * middlewares -> functions -> handler
 *
 * req object
 * res object
 *
 * next()
 *
 *
 * tipos de middleware
 *
 * 1. A nivel de app - backend
 * app.use(middleware)
 *
 *
 * 2. A nivel ruta
 * app.post("/users", firstMiddleware, secMiddleware, async (req, res) => {
 *
 *  console.log(req.weekDay) // Miercoles
 *  console.log(req.month)  // Julio
 * })
 *
 *
 *
 * SINTAXIS
 * const firstMiddleware =  ((req, res, next) => {
 *
 *      req.weekDay = 'Miercoles'
 *
 *      SE TIENEN DOS OPCIONES
 *
 *      1. FINALIZAR EL FLUJO
 *          res.send()
 *
 *      2. next()
 *          // Se pasa al siguiente paso del flujo
 *
 *
 *         /acceder a header
 *         / validar token
 *          /si esta correcto next ()
 *          // res.send(400).json({ message: 'token invalid', data: {} })
 * })
 *
 *
 * const secMiddleware =  ((req, res, next) => {
 *
 *      req.month = 'Julio'
 *
 *      SE TIENEN DOS OPCIONES
 *
 *      1. FINALIZAR EL FLUJO
 *          res.send()
 *
 *      2. next()
 *          // Se pasa al siguiente paso del flujo
 *
 * })
 *
 *
 */
