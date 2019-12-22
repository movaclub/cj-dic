# cj-dic
The SPA of CangJie Dictionary built on top of ``lit-html`` and _typescript_ etc. API for this applicaiton may be found in _datum_ folder (Node/Express).
 
## Installation notes

Everything's about __Parcel__ bundler usage for creating a dev environment other than that with ``polymer-cli`` or any other _bundled_ "__solution__". Your starting point may be this <a href="https://www.twilio.com/blog/2018/05/building-a-chat-with-twilio-lit.html-parcel-and-typescript.html">blog</a>.

 __NB__: _run ``npm i`` for the API separately_.

## Few bits on dev environment

It seems like __Parcel__ itself provides __no__ _build-and-watch_ mode like f.i. ``nodemon node .`` and the like, so an excellent hint may be borrowed from <a href="https://github.com/parcel-bundler/parcel/issues/1131">here</a>. In case of this small application check ``dev`` entry in the package.json (an extra JS script).
