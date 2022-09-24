/*jshint esversion: 6 */
function getMessages(req,res)
{
    res.send('<ul><li>hello albert</li></ul>');
}
function postMessage(req,res)
{
    console.log('updating msgs');
}

module.exports={
    getMessages,
    postMessage,
};