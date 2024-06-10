package com.example.bank_app;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;


public interface AccountRepo extends JpaRepository<Account,Long>{

	
}
