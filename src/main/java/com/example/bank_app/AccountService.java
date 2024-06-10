package com.example.bank_app;

import java.sql.Date;
import java.time.LocalDateTime;
import java.util.List;

public interface AccountService {
	public  AccountDto accountCreate(AccountDto accountDto);
	
	public List<AccountDto> listAll();
	
	public AccountDto findById(Long id);
	
	public Account CreateAccount(String name,double balance);
	
	public AccountDto Deposit(long id,double amount);
	
	
	public Account WithDraw(long id,double amount);

	public Account HolderName(String name);
	
	public Account deleteAccount(long ig);
	
	public List<Account> Transaction(String sender,String Receiver,double amount);
	
	public List<TransactionHistory> transactionHistory();
	
	public TransactionHistory createTransactionHistory(String sender,String Receiver,double amount,String time);
	
	
}
