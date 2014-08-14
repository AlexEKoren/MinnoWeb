<?php
 
    require '../vendor/autoload.php';
    use Mailgun\Mailgun;

    $aResult = array();

    if (!isset($_POST['name']) ) { $aResult['error'] = 'No name!'; }

    if (!isset($_POST['sender']) ) { $aResult['error'] = 'No email!'; }
    
    if (!isset($_POST['question']) ) { $aResult['error'] = 'No question!';}
    
    if( !isset($aResult['error']) ) {

        $m = new Mailgun('key-51527589e012c22e1e3185238bf114ac');
        $domain = "alexekoren.com";
        $message = "From: " . $_POST['name'] . "\nE-mail: " . $_POST['sender'] . "\nTopic: " . $_POST['question'];
        $subject = "New question on Minno from " . $_POST['name'];
        $m->sendMessage($domain, array('from'    => 'question@minno.com',
                                'to'      => 'alexanderekoren@gmail.com, adamaronovitz@gmail.com',
                                'subject' => 'New question on Minno!',
                                'text'    => $message));

        echo 'success';

    }
    echo 'complete';
?>
