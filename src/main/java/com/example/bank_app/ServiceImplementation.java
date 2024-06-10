package com.example.bank_app;

import java.sql.Date;
import java.time.LocalDateTime;
import java.util.ArrayList;
import java.util.Arrays;
import java.util.Iterator;
import java.util.List;
import java.util.ListIterator;
import java.util.stream.Collectors;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

@Service
public class ServiceImplementation  implements AccountService{
	

	private AccountRepo accountRepo;
	
	@Autowired
	private TransactionHistoryRepo transactionHistoryRepo;
	
	
 
	public ServiceImplementation(AccountRepo accountRepo) {
		super();
		this.accountRepo = accountRepo;
	}


   @Override
	public AccountDto accountCreate(AccountDto accountDto) {
		Account account=AccountMapper.mapToAccount(accountDto);
		Account saved=accountRepo.save(account);
		return AccountMapper.mapToAccountDto(saved);
	}


@Override
public List<AccountDto> listAll() {
	List<Account> account=accountRepo.findAll();
	
	return account.stream().map(ac->AccountMapper.mapToAccountDto(ac)).collect(Collectors.toList());
}
   
   
public AccountDto findById(Long id) {
	  Account account=accountRepo.findById(id).orElseThrow(()->new RuntimeException("Not Found"));
	  return AccountMapper.mapToAccountDto(account);
}


@Override
public AccountDto Deposit(long id, double amount) {
	 Account account=accountRepo.findById(id).orElseThrow(()->new RuntimeException("Not Found"));
	 double db=account.getBalance()+amount;
	 account.setBalance(db);
	 
	return AccountMapper.mapToAccountDto(accountRepo.save(account));
}


@Override
public Account WithDraw(long id, double amount) {
	// TODO Auto-generated method stub
	Account account=accountRepo.findById(id).orElseThrow(()->new RuntimeException("Not Found"));
	
	if(account.getBalance()<amount) {
		throw new RuntimeException("InSufficient Amount");
	}
	double db=account.getBalance()-amount;
	account.setBalance(db);
	Account newAccount=accountRepo.save(account);
	return newAccount;
}


@Override
public Account HolderName(String name) {
	List<Account> Listaccount=accountRepo.findAll();
    
    //1.Way
    Account HolderAccount=Listaccount.stream().filter(n->n.getAccountHolderName().equals(name)).findFirst().orElse(null);
   
    //2.Way
    ListIterator<Account> list=Listaccount.listIterator();
    Account ac=null;
    
    while(list.hasNext()) {
    	Account copy=list.next();
    	
    	if(copy.getAccountHolderName().equals(name))
    		 ac=copy;
    }
    
	return HolderAccount;
}


@Override
public Account deleteAccount(long id) {
	 Account account=accountRepo.findById(id).orElseThrow(()->new RuntimeException("No Found"));
	 accountRepo.delete(account);
	 return account;
}



@Override
public List<Account> Transaction(String sender, String receiver, double amount) {
	List<Account> list=accountRepo.findAll();
	Account Sender=list.stream().filter(n->n.getAccountHolderName().equals(sender)).findFirst().orElse(null);
	Account Receiver=list.stream().filter(n->n.getAccountHolderName().equals(receiver)).findFirst().orElse(null);
	
	if(Sender.getBalance()>=amount) {
	   Sender.setBalance(Sender.getBalance()-amount);
	   Receiver.setBalance(Receiver.getBalance()+amount);
	}
	else {
		throw new RuntimeException("Insufficient Amount");
	}
	
	accountRepo.save(Sender);
	accountRepo.save(Receiver);
	
	return new ArrayList(Arrays.asList(Sender,Receiver));
	
}


@Override
public List<TransactionHistory> transactionHistory() {
	return transactionHistoryRepo.findAll();
}


@Override
public TransactionHistory createTransactionHistory(String sender, String receiver, double amount,
		String time) {
	// TODO Auto-generated method stub
	
	 TransactionHistory transactionHistory = new TransactionHistory();
	 transactionHistory.setSender(sender);
     transactionHistory.setReceiver(receiver);
//     transactionHistory.setDateTime(dateTime);
     transactionHistory.setAmount(amount);
     transactionHistory.setTime(time);
     
    return transactionHistoryRepo.save(transactionHistory);
    
}


@Override
public Account CreateAccount(String name,double balance) {
     Account ac=new Account();
     ac.setAccountHolderName(name);
     ac.setBalance(balance);
	return accountRepo.save(ac);
}





 


}
