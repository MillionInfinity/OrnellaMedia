 <?php include ("index.php");?>
<!DOCTYPE html>
<html lang="en">

<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <meta http-equiv="X-UA-Compatible" content="ie=edge">
    <title>ORNELLA Multimedia</title>
    <link href="https://fonts.googleapis.com/css?family=Kristi" rel="stylesheet">
    <link rel="stylesheet" href="https://use.fontawesome.com/releases/v5.0.10/css/all.css" integrity="sha384-+d0P83n9kaQMCwj8F4RJB66tzIwOKmrdb46+porD/OvrJ+37WqIM7UoBtwHO6Nlg"
        crossorigin="anonymous">
    <link rel="stylesheet" href="css/main.css">
    <link rel="shortcut icon" type="image/png" href="img/logoflower1.png">
</head>

<body> 
    <div id="godaddy"></div>

    </div>
    <section id="tri" class="tri-cont">
        <div class="main-home">
            <div >
                <a class="welcome"><img id="visitor" src="./img/dropline.png" alt="trianle aman" width="300px"></a>
                <div class="amanzeru text-center">
                    <p class="amanmesscon"> Share us your dream...</p>
                      <div class="contact-form">
                        <form id="contact-form" action="<?= $_SERVER['PHP_SELF']; ?>" method="post">
                            <input placeholder="Your name" type="text" tabindex="1" name="name" value="<?= $name?>" class="form-control fc" autofocus>
                            <br>
                            <span class="error"><?= $name_error ?></span>
                            <br>
                            <input placeholder="Your Email Address" type="email" name="email" class="form-control fc" value="<?= $email?>" tabindex="2">
                            <br>
                            <span class="error"><?= $email_error ?></span>
                            <br>
                            <input placeholder="Your Phone Number" class="form-control fc" type="text" name="phone" value="<?= $phone?>" tabindex="2">
                            <br>
                            <span class="error"><?= $phone_error ?></span>
                            <br>
                            <textarea placeholder="Type your Message Here...." class="form-control fc"  name="message" value="<?= $message?>" tabindex="5" ></textarea>
                            <span class="error"></span>
                            <br>
                            <input class="form-control submit" id="submit" name="submit" type="submit" id="contact-submit"
                                data-submit="...Sending" value="SEND MESSAGE">
                            <div class="success"><?= $success;?></div>
                        </form>
                    </div>
                </div>

            </div>

            <div>
                <img src="./img/africa.png" alt="trianle aman" width="100%" class="lowerlogo">
                <a href="#!"><img src="./img/logoflower2.png" alt="trianle aman" width="15%" class="lowerflower"></a>
            </div>
          
            <div class="zerumess d">
                <p class="marriage">“You know when you have found your prince because you not only have a smile on your
                    face, but in your heart as well.."</p>
            </div>
            <div class="instagram">
                <p> follow along on instagram @aman_zeru</p>
            </div>
        </div>
    </section> 
    <section id="footer" class="homeFooter"></section>

    <script src="https://code.jquery.com/jquery-3.3.1.slim.min.js" integrity="sha384-q8i/X+965DzO0rT7abK41JStQIAqVgRVzpbzo5smXKp4YfRvH+8abtTE1Pi6jizo"
        crossorigin="anonymous"></script>
    <script src="https://cdnjs.cloudflare.com/ajax/libs/popper.js/1.14.3/umd/popper.min.js" integrity="sha384-ZMP7rVo3mIykV+2+9J3UJ46jBk0WLaUAdn689aCwoqbBJiSnjAK/l8WvCWPIPm49"
        crossorigin="anonymous"></script>
    <script src="https://stackpath.bootstrapcdn.com/bootstrap/4.1.3/js/bootstrap.min.js" integrity="sha384-ChfqqxuZUCnJSK3+MXmPNIyE6ZbWh2IMqE241rYiqJxyMiZ6OW/JmZQ5stwEULTy"
        crossorigin="anonymous"></script>
    <script src="dist/app.js"></script>
</body>

</html>  