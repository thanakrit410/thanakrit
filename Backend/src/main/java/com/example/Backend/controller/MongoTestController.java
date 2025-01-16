package com.example.Backend.controller;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.data.mongodb.core.MongoTemplate;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RestController;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import com.example.Backend.model.TestModel;

@RestController
public class MongoTestController {

    @Autowired
    private MongoTemplate mongoTemplate;

    @GetMapping("/test-mongo")
    public String testMongo() {
        try {
            boolean collectionExists = mongoTemplate.collectionExists("testCollection");
            return collectionExists ? "Connected to MongoDB and Collection Exists!" : "Connected to MongoDB but Collection Does Not Exist.";
        } catch (Exception e) {
            return "Error connecting to MongoDB: " + e.getMessage();
        }
    }

    @PostMapping("/add-test-model")
    public String addTestModel(@RequestBody TestModel testModel) {
        try {
            mongoTemplate.save(testModel); // การบันทึกข้อมูลลงใน MongoDB
            return "TestModel saved successfully!";
        } catch (Exception e) {
            return "Error saving TestModel: " + e.getMessage();
        }
    }
}
