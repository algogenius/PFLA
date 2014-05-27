<?php
class Database{

	var $database_name;
	var $database_user;
	var $database_pass;
	var $database_host;
	
	var $database_link;

	function Database(){
		$this->database_name = "db302859_11";
		$this->database_user = "db302859_11";
		$this->database_pass = "VQ8fK2B1GB";
		$this->database_host = "127.0.0.3";
	}
	
	function escape($value){
		if (!isset($this->database_link))
			$this->connect();
		return mysql_real_escape_string($value, $this->database_link);
	}

	function changeName($name){
		$this->database_name = $name;
	}

	function changeUser($user){
		$this->database_user = $user;
	}
	
	function changePass($pass){
		$this->database_pass = $pass;
	}

	function changeHost($host){
		$this->database_host = $host;
	}

	function change($name, $user, $pass, $host){
		$this->changeName($name);
		$this->changeUser($user);
		$this->changePass($pass);
		$this->changeHost($host);
	}

	function connect(){
		$this->database_link = mysql_connect(
			$this->database_host,
			$this->database_user,
			$this->database_pass
		) or die("Kann keine Verbindung zum Datenbanksystem herstellen!");
		mysql_select_db($this->database_name) or die("Kann die Datenbank nicht öffnen!");
	}

	function disconnect(){
		if (isset($this->database_link)) 
			mysql_close($this->database_link);
		else
			mysql_close();
	}

	function executeQuery($query){
		if (!isset($this->database_link))
			$this->connect();
		$qry = mysql_query($query, $this->database_link)
			or die("Konnte die Datenbankabfrage nicht ausführen!".mysql_error());
		return $qry;
	}

	function selectQuery($query){
		$qry = $this->executeQuery($query);
		$rows = array();
		while ($row = mysql_fetch_assoc($qry))
			$rows[] = $row;
		mysql_free_result($qry);
		return $rows;
	}

	function modifyQuery($query){
		$qry = $this->executeQuery($query);
		return mysql_affected_rows($this->database_link);
	}

	function getLastId(){
		return mysql_insert_id($this->database_link);
	}
}
?>