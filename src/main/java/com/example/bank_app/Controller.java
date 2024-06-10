package com.example.bank_app;

import java.sql.Date;
import java.time.LocalDateTime;
import java.time.format.DateTimeFormatter;
import java.util.List;
import java.util.Map;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

@CrossOrigin("*")
@RestController
@RequestMapping("/api/accounts")
public class Controller {

	
	private AccountService accountService;

	public Controller(AccountService accountService) {
		super();
		this.accountService = accountService;
	}
	
	@PostMapping
	public ResponseEntity<AccountDto> addAccount(@RequestBody AccountDto accountDto){
		return new ResponseEntity<>(accountService.accountCreate(accountDto),HttpStatus.CREATED);
	}
	
	@GetMapping("all")
	public ResponseEntity<List<AccountDto>> listAll(){
		return new ResponseEntity<>(accountService.listAll(),HttpStatus.CREATED);
	}
	
	@GetMapping("/{id}")
	public ResponseEntity<AccountDto> getElementByutId(@PathVariable Long id){
		AccountDto accountDto=accountService.findById(id);
		 return ResponseEntity.ok(accountDto);
	}
	
//	@PutMapping("/{id}/deposit")
//	public ResponseEntity<AccountDto> Deposit(@PathVariable long id,@RequestBody Map<String,Double> map)
//	{
//		double amount=map.get("amount");
//		AccountDto ACD=accountService.Deposit(id, amount);
//		
//		return ResponseEntity.ok(ACD);
//	}
	
	@PutMapping("/{id}/deposit/{amount}")
	public ResponseEntity<AccountDto> Deposit(@PathVariable long id,@PathVariable double amount)
	{
//		double amount=map.get("amount");
		AccountDto ACD=accountService.Deposit(id, amount);
		return ResponseEntity.ok(ACD);
	}
	
	
	
//	@PutMapping("/{id}/withdraw")
//	public ResponseEntity<Account> Withdraw(@PathVariable long id,@RequestBody Map<String,Double> map){
//		double amount=map.get("amount");
//		Account ac=accountService.WithDraw(id, amount);
//		
//		return ResponseEntity.ok(ac);
//	}
	
	@PutMapping("/{id}/withdraw/{amount}")
	public ResponseEntity<Account> WithDraw(@PathVariable long id,@PathVariable double amount)
	{
//		double amount=map.get("amount");
		Account ACD=accountService.WithDraw(id, amount);
		return ResponseEntity.ok(ACD);
	}
	
	@GetMapping("/holder/{name}")
	public ResponseEntity<Account> HolderAccount(@PathVariable String name){
		Account ac=accountService.HolderName(name);
		System.out.println(ac);
		return ResponseEntity.ok(ac);
	}
	
	@DeleteMapping("delete/{id}")
	public ResponseEntity<Account> DeleteAccount(@PathVariable long id){
		return ResponseEntity.ok(accountService.deleteAccount(id));
	}
	
	@PutMapping("Transaction")
	public ResponseEntity<List<Account>> Transaction(@RequestBody Map<String,String> map) {
		String sender=map.get("sender");
		String receiver=map.get("receiver");
		int amount=Integer.parseInt(map.get("amount"));
		List<Account> list =accountService.Transaction(sender, receiver, amount);
		
		return new ResponseEntity<>(list,HttpStatus.OK);
		
	}
	
	@PutMapping("Transaction/{sender}/{receiver}/{amount}")
	public ResponseEntity<List<Account>> Transaction(@PathVariable String sender,@PathVariable String receiver,@PathVariable int amount) {
		List<Account> list =accountService.Transaction(sender, receiver, amount);
		
		return new ResponseEntity<>(list,HttpStatus.OK);
		
	}
	
	  @PostMapping("/transactionHistory/{sender}/{receiver}/{amount}")
	    public ResponseEntity<TransactionHistory> createTransactionHistory(
	            @PathVariable String sender,
	            @PathVariable String receiver,
	            @PathVariable double amount) {
	     // Get current date and time
	        LocalDateTime now = LocalDateTime.now();
	        DateTimeFormatter formatter = DateTimeFormatter.ofPattern("dd/MM/yyyy HH:mm");

	        // Format the current date and time
	        String time = now.format(formatter);
	        
	        TransactionHistory transactionHistory = accountService.createTransactionHistory(sender, receiver, amount,time);
	        return new ResponseEntity<>(transactionHistory, HttpStatus.CREATED);
	    }
	  
	  @GetMapping("/transactionHistory/all")
	  public ResponseEntity<List<TransactionHistory>> allTranaction(){
		   return new ResponseEntity<>(accountService.transactionHistory(),HttpStatus.CREATED);
	  }
	  
	  @PostMapping("/createAccount/{name}/{balance}")
	  public  ResponseEntity<Account> creatAccount(@PathVariable String name,@PathVariable double balance){
		     return new ResponseEntity<>(accountService.CreateAccount(name, balance),HttpStatus.CREATED);
	  }
	  
	
}
