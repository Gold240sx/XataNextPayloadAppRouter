# React Email

Future me. when this inevitably crashes in development, delete the .react-email folder instead of trying to reinstall a bunch of stuff. this is really buggy.

# package.json not found
Hey @EduardoFazolo I just created a sample project but can confirm, that I couldn't replicate the issue with the latest version. See https://github.com/maakle/react-email-bug that it worked!

That being said, I also just went back to my main project and did the following:

Removed react-email from package.json and ran yarn to remove the package
Deleted .react-email folder
Added the package back with yarn add react-email@latest -> Upgraded to 1.9.4, i was previously on 1.9.3
And that seem to have done the trick. It regenerated the react-email files and I was able to run email dev again.

So I don't know what happened but it works again. Seems like magic or you did something in the minor upgrade from 1.9.3 to 1.9.4

Can anyone else confirm that this also worked for them who experienced the same problem? Then I can close the issue.